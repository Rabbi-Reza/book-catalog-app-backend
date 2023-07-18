import express from 'express';
import { BookRoutes } from '../modules/book/book.route';

import { CowRoutes } from '../modules/cow/cow.route';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/cows',
    route: CowRoutes,
  },
  {
    path: '/books',
    route: BookRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
