import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseTimestamp(timestamp: bigint | number): string {
  const timestampNumber = Number(timestamp);
  const date = new Date(timestampNumber * 1000);

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short',
  });
}

export function parseInterval(seconds: bigint): string {
  const intervalSeconds = Number(seconds);

  const days = Math.floor(intervalSeconds / 86400);
  const hours = Math.floor((intervalSeconds % 86400) / 3600);
  const minutes = Math.floor((intervalSeconds % 3600) / 60);
  const secs = intervalSeconds % 60;

  const parts: string[] = [];
  if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
  if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
  if (secs > 0 || parts.length === 0)
    parts.push(`${secs} second${secs !== 1 ? 's' : ''}`);

  return parts.join(', ');
}
