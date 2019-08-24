import db from '@/firebase/init';

// Create a reference to a doc
export function makeDocReference(collectionName, id) {
  let ref = db.collection(collectionName).doc(id);
  return Promise.resolve(ref);
}

// Read Collection
export function readCollection(collectionName) {
  return db
    .collection(collectionName)
    .get()
    .then(snapshot => {
      let arr = [];
      snapshot.forEach(doc => {
        let obj = doc.data();
        obj.id = doc.id;
        arr.push(obj);
      });
      return Promise.resolve(arr);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Read Document;
export function readDocument(collection, id) {
  return db
    .collection(collection)
    .doc(id)
    .get()
    .then(doc => {
      if (doc.exists) {
        let obj = doc.data();
        obj.id = doc.id;
        return Promise.resolve(obj);
      } else {
        return Promise.resolve(false);
      }
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Create Document with specified id:
export function createDocumentWithId(collection, payload, optionalId) {
  payload.createdAt = new Date();
  payload.updatedAt = new Date();
  return db
    .collection(collection)
    .doc(optionalId)
    .set(payload)
    .then(() => {
      return Promise.resolve(true);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Create Document
export function createDocument(collection, payload) {
  payload.createdAt = new Date();
  payload.updatedAt = new Date();
  return db
    .collection(collection)
    .add(payload)
    .then(() => {
      console.log('Document successfully created!');
      return Promise.resolve(true);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Update document:
export function updateDocument(collection, id, payload) {
  payload.updatedAt = new Date();
  return db
    .collection(collection)
    .doc(id)
    .update(payload)
    .then(() => {
      console.log('Document successfully updated!');
      return Promise.resolve({ message: 'ok' });
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Delete Document:
export function deleteDocument(collection, id) {
  return db
    .collection(collection)
    .doc(id)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
      return Promise.resolve({ message: 'deleted' });
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Read Sub Collection:
export function readSubCollection(collection, id, subCollection) {
  let collectionRef = db
    .collection(collection)
    .doc(id)
    .collection(subCollection);
  return collectionRef
    .get()
    .then(snapshot => {
      let arr = [];
      snapshot.forEach(doc => {
        let obj = doc.data();
        obj.id = doc.id;
        arr.push(obj);
      });
      return Promise.resolve(arr);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Read Document from Sub Collection:
export function readDocumentFromSubCollection(
  collection,
  id,
  subCollection,
  subCollectionDocumentId
) {
  let docRef = db
    .collection(collection)
    .doc(id)
    .collection(subCollection)
    .doc(subCollectionDocumentId);
  return docRef
    .get()
    .then(doc => {
      let obj = doc.data();
      obj.id = doc.id;
      return Promise.resolve(obj);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Create Document in a Sub Collection:
export function createDocumentInSubCollection(
  collection,
  id,
  subCollection,
  payload
) {
  payload.createdAt = new Date();
  payload.updatedAt = new Date();
  return db
    .collection(collection)
    .doc(id)
    .collection(subCollection)
    .add(payload)
    .then(doc => {
      console.log('Successful On Creating a Sub Collection');
      return Promise.resolve(doc.id);
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Update Document in subcollection:
export function updateDocumentInSubCollection(
  collection,
  id,
  subCollection,
  subCollectionDocumentId,
  payload
) {
  payload.updatedAt = new Date();
  return db
    .collection(collection)
    .doc(id)
    .collection(subCollection)
    .doc(subCollectionDocumentId)
    .update(payload)
    .then(() => {
      console.log('Project successfully updated!');
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}

// Delete a document from a subcollection:
export function deleteDocumentFromSubCollection(
  collection,
  id,
  subCollection,
  subCollectionDocumentId
) {
  return db
    .collection(collection)
    .doc(id)
    .collection(subCollection)
    .doc(subCollectionDocumentId)
    .delete()
    .then(() => {
      console.log('Document successfully deleted!');
      return Promise.resolve({ message: 'deleted' });
    })
    .catch(err => {
      console.error(err);
      return Promise.reject(new Error(err.message));
    });
}
