import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  const { email, name, address, phone, password } = body;

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return new Response(
      JSON.stringify({ error: "Email уже зарегистрирован" }),
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name,
      address,
      phone,
      password: hashedPassword,
    },
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
