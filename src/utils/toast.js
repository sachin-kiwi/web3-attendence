import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const showToast = (message, type = 'info') => {
  switch (type) {
    case 'success':
      Notify.success(message);
      break;
    case 'error':
      Notify.failure(message);
      break;
    case 'warning':
      Notify.warning(message);
      break;
    default:
      Notify.info(message);
      break;
  }
};
