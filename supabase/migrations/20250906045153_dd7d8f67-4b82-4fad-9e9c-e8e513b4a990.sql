-- Ensure RLS is enabled (safe if already enabled)
ALTER TABLE public.trainer_registrations ENABLE ROW LEVEL SECURITY;

-- Add admin-only SELECT policy
DROP POLICY IF EXISTS "Admins can view trainer registrations" ON public.trainer_registrations;
CREATE POLICY "Admins can view trainer registrations"
  ON public.trainer_registrations
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Keep existing public INSERT policy unchanged