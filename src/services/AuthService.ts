import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';

export class AuthService {
  private jwtSecret = process.env.JWT_SECRET || 'defaultsecret';
  private jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1d';

  async register(name: string, email: string, password: string): Promise<IUser> {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('Email já está em uso.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    return user.save();
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Credenciais inválidas.');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Credenciais inválidas.');

    const token = jwt.sign({ id: user._id }, this.jwtSecret, {
      expiresIn: this.jwtExpiresIn
    });

    return { token };
  }

  async getProfile(userId: string): Promise<IUser | null> {
    return User.findById(userId).select('-password');
  }
}
