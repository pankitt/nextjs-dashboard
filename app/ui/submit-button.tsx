'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@/app/ui/button';

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {text}
    </Button>
  );
}
