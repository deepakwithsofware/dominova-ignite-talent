-- Add created_at column to internship_registrations table
ALTER TABLE public.internship_registrations 
ADD COLUMN created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();

-- Add created_at column to trainer_registrations table  
ALTER TABLE public.trainer_registrations 
ADD COLUMN created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();

-- Create index for better performance when sorting by created_at
CREATE INDEX idx_internship_registrations_created_at ON public.internship_registrations(created_at DESC);
CREATE INDEX idx_trainer_registrations_created_at ON public.trainer_registrations(created_at DESC);