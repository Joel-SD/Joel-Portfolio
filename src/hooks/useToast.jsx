import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

/**
 * Custom hook for managing toast notifications with i18n support
 * @returns {Object} Toast methods for different types of notifications
 */
export const useToast = () => {
  const { t } = useTranslation();

  const showSuccess = (message, options = {}) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  const showError = (message, options = {}) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  const showInfo = (message, options = {}) => {
    toast.info(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  const showWarning = (message, options = {}) => {
    toast.warn(message, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options,
    });
  };

  const showLoading = (message, options = {}) => {
    return toast.loading(message, {
      position: "bottom-right",
      ...options,
    });
  };

  const updateToast = (toastId, message, type = 'success', options = {}) => {
    toast.update(toastId, {
      render: message,
      type,
      isLoading: false,
      autoClose: 4000,
      ...options,
    });
  };

  // Predefined messages with i18n
  const messages = {
    emailSent: () => showSuccess(t('toast.emailSent') || '✅ Email sent successfully!'),
    emailError: () => showError(t('toast.emailError') || '❌ Failed to send email. Please try again.'),
    cvDownloadSuccess: (fileName) => showSuccess(t('toast.cvDownloadSuccess', { fileName }) || `✅ ${fileName} downloaded successfully!`),
    cvDownloadError: () => showError(t('toast.cvDownloadError') || '❌ Failed to download CV. Please try again.'),
    formValidationError: () => showWarning(t('toast.formValidationError') || '⚠️ Please fill in all required fields correctly.'),
    networkError: () => showError(t('toast.networkError') || '🌐 Network error. Please check your connection.'),
    unexpectedError: () => showError(t('toast.unexpectedError') || '💥 An unexpected error occurred. Please try again.'),
  };

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    updateToast,
    messages,
  };
};

export default useToast;
