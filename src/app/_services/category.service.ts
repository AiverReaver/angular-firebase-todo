import { Injectable } from '@angular/core';
import { Category } from '../_models/category.model';
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore
} from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: AngularFirestoreCollection<Category>;
  private categoryDoc: AngularFirestoreDocument<Category>;
  constructor(private afs: AngularFirestore, private auth: AuthService) {
    this.categories = afs.collection<Category>('categories');
  }

  async addCategory(categoryName: string) {
    console.log(this.auth.userId);
    const data = {
      Name: categoryName,
      userId: this.auth.userId,
      userCreated: true
    };

    await this.categories.add(data);
  }

  async updateCategory(uid: string, categoryName: string) {
    this.categoryDoc = this.afs.doc<Category>(`categories/${uid}`);

    const data = {
      Name: categoryName
    };

    await this.categoryDoc.update(data);
  }

  async deleteCategory(uid: string) {
    this.categoryDoc = this.afs.doc<Category>(`categories/${uid}`);
    await this.categoryDoc.delete();
  }
}
