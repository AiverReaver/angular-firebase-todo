export interface Task {
  uid?: string;
  userId: string;
  categoryId?: string;
  description: string;
  remindDate?: string;
  remindTime?: string;
  dueDate?: string;
  repeat?: string;
  isCompleted: boolean;
  notes?: string;
}
