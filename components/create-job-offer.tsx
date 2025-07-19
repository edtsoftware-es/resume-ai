"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

export function CreateJobOffer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>Create job offer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create job offer</DrawerTitle>
          <DrawerDescription>Job offer details</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Create</Button>
          <DrawerClose>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
