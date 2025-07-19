"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { login, signup } from "@/lib/actions";
import { Button } from "./ui/button";

export function LoginDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <DrawerTrigger asChild>
        <Button variant="outline">Login</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Login</DrawerTitle>
        </DrawerHeader>
        <LoginForm />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function LoginForm() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" required type="email" />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" required type="password" />
      <button formAction={login} type="submit">
        Log in
      </button>
      <button formAction={signup} type="submit">
        Sign up
      </button>
    </form>
  );
}
