import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_service_id', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_your_template_id', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key', // Replace with your EmailJS public key
};

/**
 * EmailJS service for sending emails through the contact form
 */
class EmailService {
  constructor() {
    // Initialize EmailJS with public key
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
        to_name: 'Joel Carrasco', // Your name
        reply_to: formData.email,
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        return {
          success: true,
          message: 'Email sent successfully',
          data: response,
        };
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      return {
        success: false,
        message: error.message || 'Failed to send email',
        error,
      };
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

// Create and export singleton instance
const emailService = new EmailService();

export default emailService;

// Export configuration for easy setup reference
export { EMAILJS_CONFIG };
