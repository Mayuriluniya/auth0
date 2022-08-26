import List from "src/app/models/list";
import { createtask, deletelist, deletetask, LISTS, TASKS, updatedlist } from '../../../../../backend/database/lists_data';

// export function setUpLists(): List[]{
//     return Object.values(LISTS) ;
// }
import { of } from "rxjs";

export class taskservicestub{
    getLists(){
        return of({
            LISTS:[
                { "_id": "62f1197d8b28935d5f38b71d", "title": "list 1", "__v": 0 },
                { "_id": "62f34d6245d18a938f65eecb", "title": "list 4", "__v": 0 },
                { "_id": "62fc8e85602d47c0c80001ac", "title": "list 5", "__v": 0 },

            ]
        })
    }

    getTasks(listId:"62f1197d8b28935d5f38b71d"){
        return of({

            TASKS:[
                { "_id": "62fc90de602d47c0c80001f7", "title": "task 2", "_listId": "62f1197d8b28935d5f38b71d", "completed": false, "__v": 0 },
                { "_id": "62fcd171dc1850ddc6a5d9c9", "title": "task 3", "_listId": "62f1197d8b28935d5f38b71d", "completed": true, "__v": 0 },
                { "_id": "62fcd178dc1850ddc6a5d9cd", "title": "task 4", "_listId": "62f1197d8b28935d5f38b71d", "completed": false, "__v": 0 },
               
            ]
        })
    }
}
