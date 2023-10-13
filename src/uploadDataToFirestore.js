<<<<<<< Updated upstream
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');
const dataFilePath = '../data.json';

// Инициализация приложения Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Получение ссылки на Firestore
const firestore = admin.firestore();

// Загрузка данных из JSON-файла в Firestore
async function uploadDataToFirestore() {
  try {
    const data = require(dataFilePath);

    // Создание коллекции "Start collection" и добавление одного документа (пример)
    await createCollectionAndAddDocument();

    // Обработка "Accounts" (пользователей)
    const accountsCollectionRef = firestore.collection('Start collection').doc('Accounts');
    await accountsCollectionRef.set(data.Accounts);

    // Обработка "Rooms" (комнат)
    const roomsCollectionRef = firestore.collection('Start collection').doc('Rooms');
    await roomsCollectionRef.set({ rooms: data.Rooms });

    console.log('Данные успешно загружены в Firestore.');
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}

// Создание коллекции "Start collection" и добавление одного документа
async function createCollectionAndAddDocument() {
  try {
    const startCollectionRef = firestore.collection('Start collection');
    await startCollectionRef.doc('sampleDocument').set({ sampleField: 'Sample Data' });

    console.log('Коллекция и документ успешно созданы.');
  } catch (error) {
    console.error('Ошибка при создании коллекции и документа:', error);
  }
}

// Вызов функции для загрузки данных
uploadDataToFirestore();
=======
// // Подключение Firebase Admin SDK
// const admin = require('firebase-admin');

// // Путь к вашему файлу конфигурации Firebase Admin SDK
// const serviceAccount = require('./firebase');

// // Путь к вашему JSON-файлу с данными
// const jsonFilePath = '../data.json';

// // Инициализация приложения Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Получение ссылки на Firestore
// const firestore = admin.firestore();


// // Загрузка данных из JSON-файла в Firestore
// async function uploadDataToFirestore() {
//   try {
//     const data = require(jsonFilePath);

//     // Используйте цикл или другую логику для загрузки данных в Firestore
//     // Например:
//     for (const collectionName in data) {
//       if (data.hasOwnProperty(collectionName)) {
//         const collectionData = data[collectionName];
//         const collectionRef = firestore.collection(collectionName);
//         for (const docId in collectionData) {
//           if (collectionData.hasOwnProperty(docId)) {
//             const documentData = collectionData[docId];
//             await collectionRef.doc(docId).set(documentData);
//           }
//         }
//       }
//     }

//     console.log('Данные успешно загружены в Firestore.');
//   } catch (error) {
//     console.error('Ошибка при загрузке данных:', error);
//   }
// }

// // Вызов функции загрузки данных
// uploadDataToFirestore();
>>>>>>> Stashed changes
