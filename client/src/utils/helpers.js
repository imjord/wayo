// pluralize helper
export function pluralize(name, count) {
    if (count === 1) {
      return name;
    }
    return name + 's';
}

// idbPromise helper function
export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('wayo', 1);
        let db, tx, store;
        request.onupgradeneeded = function(e) {
            // update database store objects
            const db = request.result;
            db.createObjectStore('products', { keyPath: '_id' });
            db.createObjectStore('cart', { keyPath: '_id' });

        };
        
        // error handling
        request.onerror = function(e) {
            console.log('An error occured');
        };
  
        // success handling
        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);
    
            db.onerror = function(e) {
            console.log('error', e);
            };
            
            // success switch statement put, get, and delete
            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                    resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }
  
            tx.oncomplete = function() {
                db.close();
            };
        };
    });
}
  