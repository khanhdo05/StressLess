import { Request, Response } from 'express';
import prisma from '../config/prisma.ts';

/**
 * EventController
 *
 * Functions for handling requests from the frontend for adding, viewing, and
 * deleting calendar events.
 *
 * How to use:
 *
 * User sends a HTTP request to the URL with the route that calls the below
 * function. Check ../routes/calendar.ts for the exact routes.
 *
 * For example, if we want to get user events:
 *
 * 1. From the frontend, send an HTTP GET request to the route which calls
 *    the getUserEvents function. For example:
 *
 *    GET <BACKEND URL>/api/calendar/events/by-user/<your-user-id>
 *
 * 2. The frontend receives the data in JSON format (JS objects/arrays).
 *
 * Note that we can use the Axios library in the frontend to send HTTP requests.
 */
export default class EventController {
  /**
   * Gets all the events for specified user.
   * req.params.user - ID of the user
   */
  public static async getUserEvents(req: Request, res: Response) {
    try {
      const userEvents = await prisma.user_events.findMany({
        where: {
          user_id: req.params.user_id,
        },
      });
      res.json(userEvents);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Gets an event by its id from the database.
   * req.params.id - ID of the event
   */
  public static async getEventById(req: Request, res: Response) {
    try {
      const event = await prisma.user_events.findFirstOrThrow({
        where: {
          id: req.params.id, // Ensure id is uuid
        },
      });
      res.json(event);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Adds a new event to database using values in the request.
   */
  public static async postEvent(req: Request, res: Response) {
    const values = this.getUserEventValues(req);
    const result = await prisma.user_events.create({
      data: { ...values },
    });
    res.json(result);
  }

  /**
   * Modifies a specified event with values in the request.
   * req.params.id - ID of the event.
   */
  public static async putEvent(req: Request, res: Response) {
    try {
      const values = this.getUserEventValues(req);
      const event = await prisma.user_events.update({
        where: { id: req.params.id }, // Ensure id is uuid
        data: { ...values },
      });
      res.json(event);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Deletes a specified event.
   * req.params.id - ID of the event.
   */
  public static async deleteEvent(req: Request, res: Response) {
    try {
      const event = await prisma.user_events.delete({
        where: { id: req.params.id }, // Ensure id is uuid
      });
      res.json(event);
    } catch {
      res.status(404).json({ error: 'Not found' });
    }
  }

  /**
   * Returns an object containing the values of the user event, excluding the
   * id (created automatically) and the creation date.
   */
  private static getUserEventValues(req: Request) {
    const {
      user_id,
      title,
      start_time,
      end_time,
      description,
      location_place,
      is_recurring,
      recurrence_pattern,
      recurrence_start_date,
      recurrence_end_date,
      is_generated,
      break_time,
    } = req.body;
    return {
      user_id,
      title,
      start_time,
      end_time,
      description,
      location_place,
      is_recurring,
      recurrence_pattern,
      recurrence_start_date,
      recurrence_end_date,
      is_generated,
      break_time,
    };
  }
}
