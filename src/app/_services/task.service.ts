import { Injectable } from '@angular/core';
import { Task } from '../_models/task.model';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(private afs: AngularFirestore) {
    this.tasks = afs.collection<Task>('todos');
  }

  getTask(userId: string, categoryId: string): Observable<Task[]> {
    const tasks = this.afs
      .collection<Task>('todos', ref =>
        ref.where('userId', '==', userId).where('categoryId', '==', categoryId)
      )
      .valueChanges({ idField: 'uid' });

    return tasks;
  }

  async addTask(task) {
    const data = {
      userId: task.userId,
      description: task.description,
      isCompleted: false
    };
    await this.tasks.add(data);
  }

  async updateTask(uid: string, update) {
    this.taskDoc = this.afs.doc<Task>(`todos/${uid}`);

    const data = {
      description: update.description,
      remindDate: update.remindDate || '',
      remindTime: update.remindTime || '',
      dueDate: update.dueDate || '',
      repeat: update.repeat || '',
      isCompleted: update.isCompleted,
      notes: update.notes || ''
    };

    await this.taskDoc.update(data);
  }

  async deleteTask(uid) {
    this.taskDoc = this.afs.doc<Task>(`todos/${uid}`);
    await this.taskDoc.delete();
  }
}
