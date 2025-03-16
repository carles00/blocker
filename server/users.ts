"use client";

import { authClient } from "@/lib/client";
import { redirect } from "next/navigation";

export const signIn = async (email: string, password: string) => {
    await authClient.signIn.email({
        email: email,
        password: password
    }, {
      onSuccess(){
        redirect('/feed')
      }
    });

}

export const signUp = async (email: string, password: string, name: string) => {
    await authClient.signUp.email({
        email: email,
        password: password,
        name: name
    }, {
      onSuccess(){
        redirect('/sign-in')
      }
    })
}

export const signOut = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect('/')
      }
    }
  })
}