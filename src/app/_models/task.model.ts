export class Task {
  uid?: string;
  userId: string;
  description: string;
  remindDate?: string;
  remindTime?: string;
  dueDate?: string;
  repeat?: string;
  isCompleted: boolean;
  notes?: string;
}
