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
