import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/libs/prisma";
import {hash} from "bcrypt-ts";
import * as z from 'zod'

const userSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have more than 8 characters'),
  password_confirmation: z
    .string()
    .min(1, 'Password confirmation is required')
    .min(8, 'Password confirmation must have more than 8 characters')
})

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const { email, password, password_confirmation } = userSchema.parse(body)

    const isExistUserByEmail = await prisma.user.findUnique({
      where: { email: email }
    })

    if (isExistUserByEmail) {
      return NextResponse.json({
        user: null,
        message: 'User with this email already exist.'
      }, { status: 400 })
    }

    if (password !== password_confirmation) {
      return NextResponse.json({
        user: null,
        message: 'Password doesn\'t match.'
      }, { status: 400 })
    }

    const hashedPassword = await hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })

    const { password: newUserPassword, ...rest} = newUser

    return NextResponse.json({
      user: rest,
      message: 'User created successfully.'
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({
      error,
      message: 'Something went wrong.'
    }, { status: 500 })
  }
}