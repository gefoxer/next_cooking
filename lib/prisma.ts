import { PrismaClient } from '@prisma/client';

// Глобальный объект для хранения PrismaClient в development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Используем существующий экземпляр или создаём новый
export const prisma = globalForPrisma.prisma || new PrismaClient();

// В development сохраняем PrismaClient в глобальный объект
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;