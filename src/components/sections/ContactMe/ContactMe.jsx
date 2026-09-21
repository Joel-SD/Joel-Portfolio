import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { useToast } from '../../../hooks/useToast';
import emailService from '../../../services/emailService';
import { portfolioData } from '../../../data/portfolioData';
import SectionHeading from '../../common/SectionHeading';
import {
  fadeInLeft,
  fadeInRight,
  buttonHover,
  buttonTap,
  iconButtonHover,
  iconButtonTap,
  defaultViewport,
} from '../../../utils/animations';

const getContactMethods = (t) => {
  const { contact, personalInfo } = portfolioData;
  const socialLinks = personalInfo.socialLinks;
  const getSocialUrl = (name) => socialLinks.find((link) => link.name === name)?.url || '';

  return {
    email: {
      icon: FaEnvelope,
      label: t('contact.labels.email'),
      value: contact.email,
      href: `mailto:${contact.email}`,
      toastMessage: t('contact.buttons.social.openEmail'),
      external: false,
    },
    linkedin: {
      icon: FaLinkedin,
      label: t('contact.labels.linkedin'),
      href: getSocialUrl('linkedin'),
      toastMessage: t('contact.buttons.social.openLinkedin'),
      external: true,
    },
    github: {
      icon: FaGithub,
      label: t('contact.labels.github'),
      href: getSocialUrl('github'),
      toastMessage: t('contact.buttons.social.openGithub'),
      external: true,
    },
  };
};

const FormInput = ({
  name,
  type = 'text',
  placeholder,
  multiline = false,
  errors,
  getValidationRules,
  register,
  ...props
}) => {
  const hasError = errors[name];
  const validationRules = getValidationRules();
  const baseClasses = `
    w-full p-3 border-2 bg-white transition-colors duration-200 resize-none rounded-lg
    focus:outline-none focus:border-[var(--color-accent)] hover:border-gray-400
    ${hasError ? 'border-[var(--text-error)]' : 'border-[var(--gray-300)]'}
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
      {hasError ? (
        <p className="text-red-500 ml-1 text-xs mt-1">{hasError.message}</p>
      ) : null}
    </div>
  );
};

export default function ContactMe() {
  const { t } = useTranslation();
  const contactMethods = getContactMethods(t);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const getValidationRules = useCallback(
    () => ({
      email: {
        required: t('contact.validation.emailRequired'),
        validate: (value) => {
          if (value && value.trim().length > 0) {
            const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            return emailPattern.test(value) || t('contact.validation.emailInvalid');
          }
          return true;
        },
      },
      subject: {
        required: t('contact.validation.subjectRequired'),
        minLength: { value: 3, message: t('contact.validation.subjectMinLength') },
        maxLength: { value: 100, message: t('contact.validation.subjectMaxLength') },
      },
      message: {
        required: t('contact.validation.messageRequired'),
        minLength: { value: 10, message: t('contact.validation.messageMinLength') },
        maxLength: { value: 1000, message: t('contact.validation.messageMaxLength') },
      },
    }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = useCallback(
    async (data) => {
      if (isSubmitting) return;

      setIsSubmitting(true);
      const loadingToastId = toast.showLoading(t('contact.form.sending'));

      try {
        const isFormValid = await trigger();
        if (!isFormValid) {
          toast.updateToast(loadingToastId, t('toast.formValidationError'), 'warning');
          return;
        }

        if (!emailService.isConfigured()) {
          const emailBody = encodeURIComponent(
            `${t('contact.labels.email')}: ${data.email}\n` +
              `${t('contact.form.subjectLabel')}: ${data.subject}\n\n` +
              `${t('contact.form.messageLabel')}:\n${data.message}`
          );

          const mailtoLink = `mailto:${contactMethods.email.value}?subject=${encodeURIComponent(data.subject)}&body=${emailBody}`;
          window.location.href = mailtoLink;

          toast.updateToast(loadingToastId, t('contact.toast.emailClientOpened'), 'info');
          reset();
          return;
        }

        const result = await emailService.sendContactEmail(data);

        if (result.success) {
          toast.updateToast(loadingToastId, t('toast.emailSent'));
          reset();
        } else {
          throw new Error(result.message || 'Failed to send email');
        }
      } catch (error) {
        console.error('Form submission error:', error);

        if (error.name === 'NetworkError' || error.message.includes('network')) {
          toast.updateToast(loadingToastId, t('toast.networkError'), 'error');
        } else {
          toast.updateToast(loadingToastId, t('toast.emailError'), 'error');
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [reset, toast, t, isSubmitting, trigger, contactMethods.email.value]
  );

  const handleContactClick = useCallback(
    (method) => {
      const contact = contactMethods[method];
      if (!contact) return;

      try {
        if (contact.external) {
          window.open(contact.href, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = contact.href;
        }
        toast.showInfo(contact.toastMessage);
      } catch (error) {
        console.error('Contact method error:', error);
        toast.showError(t('toast.unexpectedError'));
      }
    },
    [toast, t, contactMethods]
  );

  return (
    <section id="contact" className="w-full bg-white py-20 px-4">
      <div className="w-full max-w-[var(--max-width-sections)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInLeft}
          >
            <SectionHeading
              title={t('contact.formTitle')}
              description={t('contact.formLead')}
              align="left"
            />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              noValidate
            >
              <div>
                <FormInput
                  name="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  aria-label={t('contact.labels.email')}
                  autoComplete="email"
                  errors={errors}
                  getValidationRules={getValidationRules}
                  register={register}
                />
              </div>

              <div>
                <FormInput
                  name="subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  aria-label={t('contact.form.subjectPlaceholder')}
                  errors={errors}
                  getValidationRules={getValidationRules}
                  register={register}
                />
              </div>

              <div>
                <FormInput
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  multiline
                  aria-label={t('contact.form.messagePlaceholder')}
                  errors={errors}
                  getValidationRules={getValidationRules}
                  register={register}
                />
              </div>

              <div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    py-3 px-6 font-medium transition-colors duration-200 rounded-lg
                    flex items-center space-x-2 text-white
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[var(--color-black)] hover:bg-[var(--color-accent)]'}
                  `}
                  aria-label={t('contact.buttons.send')}
                  whileHover={!isSubmitting ? buttonHover : {}}
                  whileTap={!isSubmitting ? buttonTap : {}}
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
                </motion.button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeInRight}
          >
            <SectionHeading
              title={t('contact.asideTitle')}
              description={t('contact.description')}
              align="left"
            />

            <button
              type="button"
              onClick={() => handleContactClick('email')}
              className="text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {contactMethods.email.value}
            </button>

            <div className="flex gap-2 mt-6">
              {['github', 'linkedin', 'email'].map((method) => {
                const contact = contactMethods[method];
                const Icon = contact.icon;
                return (
                  <motion.button
                    key={method}
                    type="button"
                    onClick={() => handleContactClick(method)}
                    className="w-10 h-10 bg-[var(--color-black)] flex items-center justify-center cursor-pointer transition-colors hover:bg-[var(--color-accent)] rounded-lg"
                    aria-label={contact.label}
                    whileHover={iconButtonHover}
                    whileTap={iconButtonTap}
                  >
                    <Icon className="text-white text-sm" />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
