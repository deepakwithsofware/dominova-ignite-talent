import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  height?: string;
}

const Map: React.FC<MapProps> = ({ 
  latitude, 
  longitude, 
  zoom = 15, 
  height = "h-96" 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [accessToken, setAccessToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState<boolean>(true);

  useEffect(() => {
    // Check for token in environment variables first
    const envToken = import.meta.env.VITE_MAPBOX_TOKEN;
    if (envToken) {
      setAccessToken(envToken);
      setShowTokenInput(false);
    }
  }, []);

  const initializeMap = () => {
    if (!mapContainer.current || !accessToken) return;

    try {
      mapboxgl.accessToken = accessToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: zoom,
      });

      // Add marker at the specified location
      new mapboxgl.Marker({
        color: '#3B82F6', // Primary color
        scale: 1.2
      })
        .setLngLat([longitude, latitude])
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    if (accessToken && !showTokenInput) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [accessToken, showTokenInput, latitude, longitude, zoom]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessToken.trim()) {
      initializeMap();
    }
  };

  if (showTokenInput) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg">Map Configuration Required</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            To display the map, please enter your Mapbox public token. Get yours at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Enter your Mapbox public token"
              value={accessToken}
              onChange={(e) => setAccessToken(e.target.value)}
              className="bg-background border-border"
            />
            <Button type="submit" className="w-full">
              Load Map
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={`relative w-full ${height}`}>
      <div ref={mapContainer} className="absolute inset-0 rounded-lg overflow-hidden" />
    </div>
  );
};

export default Map;