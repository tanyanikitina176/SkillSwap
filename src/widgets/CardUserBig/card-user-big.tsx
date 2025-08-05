import styles from "./card-user-big.module.css";
import { Button } from "@shared/ui/button/button.tsx";
import {UserCard} from "@widgets/UserCard/user-card.tsx";


const mockUser = {
  id: '1',
  name: 'Анна',
  age: 28,
  gender: 'male' as const,
  city: { id: '1', name: 'Москва' },
  photo: '/db/users-photo/anna.jpg',
  description: 'Описание Анны...',
  likes: ['2', '5', '8', '9'],
  teachingSkills: [
    {
      id: '111',
      name: 'Английский язык',
      category: { color: '#FFD700' }
    },
    {
      id: '127',
      name: 'Программирование',
      category: { color: '#87CEFA' }
    },
    {
      id: '999',
      name: 'Скейтбординг',
      category: { color: '#fddde6' }
    }
  ],
  wantToLearnSkills: [
    {
      id: '106',
      name: 'Рисование',
      category: { color: '#90EE90' }
    },
    {
      id: '124',
      name: 'Кулинария',
      category: { color: '#FFC0CB' }
    }
  ]
}
export const CardUserBig = () => {




  return (
    <div className={styles.gridContainer}>
      <UserCard user={mockUser} />
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Игра на барабанах</h2>
          <p className={styles.skills}>
            Творчество и искусство / Музыка и звук
          </p>
          <p className={styles.description}>
            Привет! Я играю на барабанах уже больше 10 лет — от репетиций в
            гараже до выступлений на сцене с живыми группами. Научу основам
            техники (и как не отбить себе пальцы), играть любимые ритмы и
            разбирать песни, импровизировать и звучать уверенно даже без
            паритуры
          </p>

          <Button>Предложить обмен</Button>
        </div>
        <div className={styles.containerPhoto}></div>
      </div>
    </div>
  );
};
