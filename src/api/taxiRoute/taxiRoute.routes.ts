import express, {Router }from "express";
import { create, getAll, getOne, remove, update } from "./taxiRoute.controller";
const router = Router()

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove)

export default router;