'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMediaQuery } from '@/hooks/use-media-query';
import { login, signup } from '@/lib/actions';

export function LoginDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop) {
    return (
      <Dialog onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
        <DialogContent className=" sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="sr-only">Login</DialogTitle>
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
    <Card className="mx-auto w-full max-w-md border-none shadow-none">
      <CardHeader className="space-y-1">
        <CardTitle className="text-center font-bold text-2xl">
          Accede a Resume AI
        </CardTitle>
        <CardDescription className="text-center">
          Ingresa tu email y contraseña para continuar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="tu@email.com"
              required
              type="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              name="password"
              placeholder="••••••••"
              required
              type="password"
            />
          </div>

          <div className="space-y-2 pt-2">
            <Button className="w-full" formAction={login} type="submit">
              Iniciar Sesión
            </Button>

            <Button
              className="w-full bg-transparent"
              formAction={signup}
              type="submit"
              variant="outline"
            >
              Crear Cuenta
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-muted-foreground text-sm">
          <p>Al continuar, aceptas nuestros términos y condiciones</p>
        </div>
      </CardContent>
    </Card>
  );
}
