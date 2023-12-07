"use client"
import { Button, Input, Text } from "@/components"
import { cn } from "@/utils"
import { FC, FormEventHandler, HTMLAttributes, useState } from "react"
import { z } from "zod"

interface SignupFormProps extends HTMLAttributes<HTMLFormElement> {}

const inputSchema = z.object({
  email: z
    .string({ required_error: "Please enter your email address" })
    .email("Please enter a valid email address"),
})

export const SignupForm: FC<SignupFormProps> = ({ className, ...props }) => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    console.log("sub")

    const parsed = inputSchema.safeParse({ email })

    if (!parsed.success) {
      setError(parsed.error.issues[0].message)
      return
    }

    setError("")

    window.location.href = `https://app.loch.one/welcome?email=${email}`
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("max-w-sm gap-5 flex flex-col w-full", className)}
      {...props}
    >
      <h1 className="text-4xl font-normal text-dark-300">
        Sign up for <br /> exclusive access.
      </h1>

      <div>
        <Input
          className="mt-5 w-full"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <small className="text-red-500">{error}</small>}
      </div>

      <Button type="submit" className="w-full">
        Get Started
      </Button>

      <Text className="text-sm mt-3 self-start text-dark-500">
        You&apos;ll receive an email with an invite link to join.
      </Text>
    </form>
  )
}
