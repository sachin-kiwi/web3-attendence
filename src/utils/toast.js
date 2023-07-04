import { Notify } from 'notiflix/build/notiflix-notify-aio';
const config = { position: 'center-top' };

export const showToast = (message, type = 'info') => {
  switch (type) {
    case 'success':
      Notify.success(message, config);
      break;
    case 'error':
      Notify.failure(message, config);
      break;
    case 'warning':
      Notify.warning(message, config);
      break;
    default:
      Notify.info(message, config);
      break;
  }
};
