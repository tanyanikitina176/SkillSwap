import "./App.css";

function App() {
  return (
    <>
      <p>Начинаем работу</p>
    </>
  );
}

export default App;

import { Notification } from '../shared/ui/notification';

export function AppTry() {
  // Пример данных 
  const notifications = [
    { id: 1, senderName: "Олег", isRead: false },
   /* { id: 2, senderName: "Анна", isRead: true },
    { id: 3, senderName: "Иван", isRead: false }, */
  ];

  return (
    <div>
      {notifications.map((notif) => (
        <Notification
          key={notif.id}
          senderName={notif.senderName}
          onClose={() => console.log(`Закрыто уведомление ${notif.id}`)}
          onAction={() => console.log(`Переход к обмену с ${notif.senderName}`)}
        />
      ))}
    </div>
  );
}


