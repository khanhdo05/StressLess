import { Router } from 'express';
import EventController from '../controllers/EventController';
import DeadlineController from '../controllers/DeadlineController';

// Creates the router
const router = Router();

// Get all events for a particular user
router.get('/events/by-user/:user', EventController.getUserEvents);

// Add an event
router.post('/events', EventController.postEvent);

// Get an event by id
router.get('/events/id/:id', EventController.getEventById);

// Modify an event
router.put('/events/id/:id', EventController.putEvent);

// Delete an event
router.delete('/events/id/:id', EventController.deleteEvent);

// Get all deadlines for a particular user
router.get('/deadlines/by-user/:user', DeadlineController.getUserDeadlines);

// Add a deadline
router.post('/deadlines', DeadlineController.postDeadline);

// Get a deadline by id
router.get('/deadlines/id/:id', DeadlineController.getDeadlinebyId);

// Modify a deadline
router.put('/deadlines/id/:id', DeadlineController.putDeadline);

// Delete a deadline
router.delete('/deadlines/id/:id', DeadlineController.deleteDeadline);

export default router;
