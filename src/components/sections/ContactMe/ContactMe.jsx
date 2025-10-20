import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useToast } from '../../../hooks/useToast';
import emailService from '../../../services/emailService';

// Contact methods configuration
const getContactMethods = (t) => ({
  email: {
    icon: FaEnvelope,
    label: t('contact.labels.email'),
    value: 'joelcarrasco.sd@gmail.com',
    action: (value) => `mailto:${value}`,
    hoverColor: 'hover:bg-blue-600',
    toastMessage: t('contact.buttons.social.openEmail')
  },
  phone: {
    icon: FaPhone,
    label: t('contact.labels.phone'),
    value: '+507 62575381',
    action: (value) => `tel:${value}`,
    hoverColor: 'hover:bg-green-600',
    toastMessage: t('contact.buttons.social.openPhone')
  },
  whatsapp: {
    icon: FaWhatsapp,
    label: t('contact.labels.whatsapp'),
    value: '+507 62575381',
    action: (value) => `https://wa.me/${value.replace(/[^0-9]/g, '')}`,
    hoverColor: 'hover:bg-green-500',
    external: true,
    toastMessage: t('contact.buttons.social.openWhatsapp')
  },
  linkedin: {
    icon: FaLinkedin,
    label: t('contact.labels.linkedin'),
    value: 'Joel Carrasco',
    action: () => 'https://www.linkedin.com/in/joel-carrasco-cubilla',
    hoverColor: 'hover:bg-blue-700',
    external: true,
    toastMessage: t('contact.buttons.social.openLinkedin')
  },
  github: {
    icon: FaGithub,
    label: t('contact.labels.github'),
    value: 'Joel-SD',
    action: () => 'https://github.com/Joel-SD',
    hoverColor: 'hover:bg-gray-800',
    external: true,
    toastMessage: t('contact.buttons.social.openGithub')
  },
});

// Enhanced Input component with better color management and less aggressive validation
const FormInput = ({ name, type = 'text', placeholder, multiline = false, errors, touchedFields, watch, getValidationRules, register, ...props }) => {
  const hasError = errors[name];
  const isTouched = touchedFields[name];
  const fieldValue = watch(name);
  const validationRules = getValidationRules();
  
  // Determine border color based on state - more user-friendly approach
  const getBorderColor = () => {
    if (hasError) return 'border-[var(--text-error)]';
    // Only show green if field has sufficient content and no errors
    if (isTouched && fieldValue && fieldValue.length > 2 && !hasError) return 'border-green-500';
    return 'border-[var(--text-muted)] focus:border-[var(--text-primary)]';
  };
  
  const baseClasses = `
    w-full p-3 border-2 bg-white transition-all duration-300 resize-none rounded-lg
    focus:outline-none hover:border-gray-400
    ${getBorderColor()}
  `.trim();

  const InputComponent = multiline ? 'textarea' : 'input';

  return (
    <div>
      <InputComponent
        {...register(name, validationRules[name])}
        type={!multiline ? type : undefined}
        placeholder={placeholder}
        className={baseClasses}
        rows={multiline ? 5 : undefined}
        aria-invalid={hasError ? 'true' : 'false'}
        {...props}
      />
      {hasError && (
        <p className="text-red-500 ml-1 text-xs flex items-center">
          
          {hasError.message}
        </p>
      )}
    </div>
  );
};

export default function ContactMe() {
  const { t } = useTranslation();
  const contactMethods = getContactMethods(t);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  // Dynamic validation rules with translations - more permissive for better UX
  const getValidationRules = useCallback(() => ({
    email: {
      required: t('contact.validation.emailRequired'),
      validate: (value) => {
        // Only validate email pattern if field has content
        if (value && value.trim().length > 0) {
          const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
          return emailPattern.test(value) || t('contact.validation.emailInvalid');
        }
        return true;
      }
    },
    subject: {
      required: t('contact.validation.subjectRequired'),
      minLength: { 
        value: 3, 
        message: t('contact.validation.subjectMinLength')
      },
      maxLength: { 
        value: 100, 
        message: t('contact.validation.subjectMaxLength')
      },
    },
    message: {
      required: t('contact.validation.messageRequired'),
      minLength: { 
        value: 10, 
        message: t('contact.validation.messageMinLength') 
      },
      maxLength: { 
        value: 1000, 
        message: t('contact.validation.messageMaxLength') 
      },
    },
  }), [t]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, touchedFields },
    trigger,
    watch,
  } = useForm({ 
    mode: 'onSubmit', // Only validate on submit, not while typing
    reValidateMode: 'onBlur', // Re-validate on blur after first submission
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    }
  });

  // Enhanced form submission with EmailJS and comprehensive error handling
  const onSubmit = useCallback(async (data) => {
    // Prevent double submission
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToastId = toast.showLoading(
      t('contact.form.sending') || 'Sending message...'
    );

    try {
      // Validate all fields before submission
      const isFormValid = await trigger();
      if (!isFormValid) {
        toast.updateToast(loadingToastId, toast.messages.formValidationError(), 'warning');
        return;
      }

      // Check if EmailJS is configured
      if (!emailService.isConfigured()) {
        console.warn('EmailJS not configured, using fallback mailto');
        
        // Fallback to mailto if EmailJS is not configured
        const emailBody = encodeURIComponent(
          `Email: ${data.email}\n` +
          `Subject: ${data.subject}\n\n` +
          `Message:\n${data.message}`
        );
        
        const mailtoLink = `mailto:${contactMethods.email.value}?subject=${encodeURIComponent(data.subject)}&body=${emailBody}`;
        window.location.href = mailtoLink;
        
        toast.updateToast(loadingToastId, 
          'Email client opened. Please send the email from your email application.', 
          'info'
        );
        reset();
        return;
      }

      // Send email via EmailJS
      const result = await emailService.sendContactEmail(data);

      if (result.success) {
        toast.updateToast(loadingToastId, toast.messages.emailSent());
        reset();
      } else {
        throw new Error(result.message || 'Failed to send email');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      
      // Handle different types of errors
      if (error.name === 'NetworkError' || error.message.includes('network')) {
        toast.updateToast(loadingToastId, toast.messages.networkError(), 'error');
      } else if (error.status === 400) {
        toast.updateToast(loadingToastId, toast.messages.formValidationError(), 'warning');
      } else {
        toast.updateToast(loadingToastId, toast.messages.emailError(), 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [reset, toast, t, isSubmitting, trigger]);

  // Handle contact method clicks with toast notifications
  const handleContactClick = useCallback((method) => {
    const contactMethods = getContactMethods(t);
    const contact = contactMethods[method];
    if (!contact) return;

    try {
      const action = contact.action(contact.value);
      
      if (contact.external) {
        window.open(action, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = action;
      }
      
      // Show success toast for contact method click with translated message
      toast.showInfo(contact.toastMessage);
    } catch (error) {
      console.error('Contact method error:', error);
      toast.showError(t('toast.unexpectedError'));
    }
  }, [toast, t]);

  // Contact method component
  const ContactMethod = ({ method, contact }) => {
    const Icon = contact.icon;
    return (
      <div 
        className="group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-[var(--gray-50)] hover:shadow-md"
        onClick={() => handleContactClick(method)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleContactClick(method)}
        aria-label={`Contact via ${contact.label}`}
      >
        <div className={`w-12 h-12 bg-[var(--gray-100)] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${contact.hoverColor} group-hover:text-white group-hover:shadow-lg`}>
          <Icon className="text-lg" />
        </div>
        <div className="flex-1">
          <div className="text-xs text-[var(--text-muted)] uppercase tracking-wide font-medium">
            {contact.label}
          </div>
          <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--text-secondary)] transition-colors duration-300">
            {contact.value}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="w-full bg-white py-16 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-[length:var(--font-size-3xl)] lg:text-[length:var(--font-size-4xl)] font-bold text-[var(--text-primary)] mb-4">
                {t('contact.formTitle')}
              </h2>
              <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                {t('contact.form.description')}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <FormInput
                name="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                aria-label={t('contact.labels.email')}
                autoComplete="email"
                errors={errors}
                touchedFields={touchedFields}
                watch={watch}
                getValidationRules={getValidationRules}
                register={register}
              />
              
              <FormInput
                name="subject"
                placeholder={t('contact.form.subjectPlaceholder')}
                aria-label={t('contact.form.subjectPlaceholder')}
                errors={errors}
                touchedFields={touchedFields}
                watch={watch}
                getValidationRules={getValidationRules}
                register={register}
              />
              
              <FormInput
                name="message"
                placeholder={t('contact.form.messagePlaceholder')}
                multiline
                aria-label={t('contact.form.messagePlaceholder')}
                errors={errors}
                touchedFields={touchedFields}
                watch={watch}
                getValidationRules={getValidationRules}
                register={register}
              />

              {/* Form actions - Button with social icons */}
              <div className="flex items-center justify-between">
                {/* Submit Button - Smaller size */}
                <button 
                  type="submit" 
                  disabled={!isValid || isSubmitting}
                  className={`
                    py-3 px-6 font-medium transition-all duration-300 rounded-lg
                    flex items-center space-x-2
                    ${isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed text-white' 
                      : !isValid
                        ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                        : 'bg-[var(--color-black)] hover:bg-[var(--gray-800)] text-white transform hover:scale-[1.02] hover:shadow-lg'
                    }
                  `}
                  aria-label="Send message"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin text-sm" />
                      <span>{t('contact.buttons.sending')}</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      <span>{t('contact.buttons.send')}</span>
                    </>
                  )}
                </button>

                
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {t('contact.letsTalk')} <span className="bg-[var(--color-black)] text-white px-2 py-1">{t('contact.talkHighlight')}</span> {t('contact.talkFor')}
              </h2>
              <h3 className="text-xl font-bold text-[var(--text-secondary)] mb-6">
                {t('contact.somethingSpecial')}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">
                {t('contact.description')}
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div 
                onClick={() => handleContactClick('email')}
                className="cursor-pointer group transition-colors duration-200 hover:text-[var(--gray-600)]"
              >
                <p className="font-bold text-[var(--text-primary)] group-hover:text-[var(--text-muted)] transition-colors duration-200">
                  {contactMethods.email.value}
                </p>
              </div>
              
              <div 
                onClick={() => handleContactClick('phone')}
                className="cursor-pointer group transition-colors duration-200 hover:text-[var(--gray-600)]"
              >
                <p className="font-bold text-[var(--text-primary)] group-hover:text-[var(--text-muted)] transition-colors duration-200">
                  {contactMethods.phone.value}
                </p>
              </div>
              {/* Social Icons - Same row as button */}
            <div className="flex gap-2">
              <div 
                onClick={() => handleContactClick('github')}
                className="w-10 h-10 bg-[var(--color-black)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[var(--gray-800)] hover:scale-105 rounded-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleContactClick('github')}
                aria-label="GitHub"
              >
                <FaGithub className="text-white text-sm" />
              </div>
              
              <div 
                onClick={() => handleContactClick('linkedin')}
                className="w-10 h-10 bg-[var(--color-black)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[var(--gray-800)] hover:scale-105 rounded-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleContactClick('linkedin')}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white text-sm" />
              </div>
              
              <div 
                onClick={() => handleContactClick('email')}
                className="w-10 h-10 bg-[var(--color-black)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[var(--gray-800)] hover:scale-105 rounded-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleContactClick('email')}
                aria-label="Email"
              >
                <FaEnvelope className="text-white text-sm" />
              </div>
              
              <div 
                onClick={() => handleContactClick('whatsapp')}
                className="w-10 h-10 bg-[var(--color-black)] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[var(--gray-800)] hover:scale-105 rounded-lg"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleContactClick('whatsapp')}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white text-sm" />
              </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
