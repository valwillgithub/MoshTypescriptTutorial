import { Router } from 'express';
import CreateReminderDto from '../dtos/create-reminder';
import Reminder from '../models/model-reminders';
//import { CreateReminderDto } from '../dtos/create-reminder';
const router = Router();
const remArray: Reminder[] = [];

router.get('/', (req, res) => {
	res.send(remArray);
});

router.post('/', (req, res) => {
	const { title } = req.body as CreateReminderDto;
	const newReminder = new Reminder(title);
	remArray.push(newReminder);
	res.status(201).json(newReminder);
});
export default router;
