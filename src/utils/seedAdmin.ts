import { prisma } from "../config/db";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL!;
    const adminPassword = process.env.ADMIN_PASSWORD!;
    const adminPhone = process.env.ADMIN_PHONE || "01954288782"; // phone required

    const existingAdmin = await prisma.user.findUnique({
      where: { email: adminEmail },
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists:", existingAdmin.email);
      return;
    }

    const hashedPassword = await bcryptjs.hash(adminPassword, 10);

    const admin = await prisma.user.create({
      data: {
        name: "Admin Owner",         // required
        email: adminEmail,
        password: hashedPassword,    // required
        role: "ADMIN",               // matches enum
        phone: adminPhone,           // required
        picture: "https://i.ibb.co/BmrXZ1V/my-img.jpg", // optional, default exists
        isVerified: true,
      },
    });

    console.log("🎉 Admin user created:", admin.email);
  } catch (error) {
    console.error("❌ Error seeding admin:", error);
  }
};

// Run seed
seedAdmin();
