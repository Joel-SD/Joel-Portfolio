import emailjs from '@emailjs/browser';

// EmailJS Configuration - set via environment variables or replace placeholders below
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_service_id',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_template_id',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

/**
 * EmailJS service for sending emails through the contact form
 */
class EmailService {
  constructor() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }

  /**
   * Send contact form email
   * @param {Object} formData - Form data containing, email, subject, message
   * @returns {Promise} EmailJS response
   */
  async sendContactEmail(formData) {
    try {
      const templateParams = {
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Joel Carrasco',
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return { success: true, message: 'Email sent successfully', data: response };
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return { success: false, message: error.message || 'Failed to send email', error };
    }
  }

  /**
   * Validate EmailJS configuration
   * @returns {boolean} True if configuration is valid
   */
  isConfigured() {
    return (
      EMAILJS_CONFIG.SERVICE_ID !== 'service_your_service_id' &&
      EMAILJS_CONFIG.TEMPLATE_ID !== 'template_your_template_id' &&
      EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key'
    );
  }
}

const emailService = new EmailService();
export default emailService;
export { EMAILJS_CONFIG };
