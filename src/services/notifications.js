export const initializeNotifications = async () => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      registerPushManager();
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

const registerPushManager = async () => {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY'
    });
    // Send subscription to your server
  } catch (error) {
    console.error('Error registering push manager:', error);
  }
};