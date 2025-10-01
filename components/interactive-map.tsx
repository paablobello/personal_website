"use client"

import { useState, useCallback, useRef } from "react"
import ReactMapGL, { Marker } from "react-map-gl"
import type { MapRef } from "react-map-gl"
import { siteConfig } from "@/config/site"
import "mapbox-gl/dist/mapbox-gl.css"

export function InteractiveMap() {
  const mapRef = useRef<MapRef>(null)
  const [activeLocation, setActiveLocation] = useState<"from" | "current">("current")

  const flyTo = useCallback(async (location: "from" | "current") => {
    if (!mapRef.current) return
    
    setActiveLocation(location)
    const coords = siteConfig.locations[location].coordinates
    
    // Animación estilo globo terráqueo - muy lenta con rotación del globo
    // 1. Zoom out muy suave para ver el globo terráqueo completo
    await mapRef.current.easeTo({
      zoom: 0.8,
      pitch: 0,
      duration: 5000,
      essential: true
    })
    
    // 2. Volar a la nueva ubicación con rotación lenta del globo
    mapRef.current.flyTo({
      center: [coords.longitude, coords.latitude],
      zoom: coords.zoom,
      duration: 6500,
      curve: 2,
      speed: 0.6,
      essential: true
    })
  }, [])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border">
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          longitude: siteConfig.locations.current.coordinates.longitude,
          latitude: siteConfig.locations.current.coordinates.latitude,
          zoom: siteConfig.locations.current.coordinates.zoom,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        attributionControl={false}
        renderWorldCopies={false}
        dragRotate={true}
        touchZoomRotate={true}
        scrollZoom={true}
        doubleClickZoom={true}
        dragPan={true}
        keyboard={true}
        projection={{ name: "globe" } as any}
      >
        {/* Marker para A Coruña */}
        <Marker
          longitude={siteConfig.locations.from.coordinates.longitude}
          latitude={siteConfig.locations.from.coordinates.latitude}
          anchor="bottom"
        >
          <div className="relative flex flex-col items-center">
            <div className="bg-white border-2 border-gray-800 rounded-full p-2 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-gray-800" />
            </div>
            <div className="absolute -bottom-1 w-0.5 h-3 bg-gray-800" />
          </div>
        </Marker>

        {/* Marker para Boston */}
        <Marker
          longitude={siteConfig.locations.current.coordinates.longitude}
          latitude={siteConfig.locations.current.coordinates.latitude}
          anchor="bottom"
        >
          <div className="relative flex flex-col items-center">
            <div className="bg-white border-2 border-gray-800 rounded-full p-2 shadow-lg">
              <div className="w-2 h-2 rounded-full bg-gray-800" />
            </div>
            <div className="absolute -bottom-1 w-0.5 h-3 bg-gray-800" />
          </div>
        </Marker>
      </ReactMapGL>

      {/* Botones dentro del mapa - estilo Prakash */}
      <div className="absolute bottom-2 left-6 right-6 flex justify-between items-center z-10">
        <button
          onClick={() => flyTo("from")}
          className={`px-5 py-2.5 rounded-lg backdrop-blur-md transition-all ${
            activeLocation === "from"
              ? "bg-gray-900/95 text-white shadow-lg"
              : "bg-gray-800/70 text-gray-300 hover:bg-gray-800/85"
          }`}
        >
          <span className="flex items-center gap-2 text-sm">
            {siteConfig.locations.from.name}
            <span>{siteConfig.locations.from.flag}</span>
          </span>
        </button>
        
        <button
          onClick={() => flyTo("current")}
          className={`px-5 py-2.5 rounded-lg backdrop-blur-md transition-all ${
            activeLocation === "current"
              ? "bg-gray-900/95 text-white shadow-lg"
              : "bg-gray-800/70 text-gray-300 hover:bg-gray-800/85"
          }`}
        >
          <span className="flex items-center gap-2 text-sm">
            {siteConfig.locations.current.name}
            <span>{siteConfig.locations.current.flag}</span>
          </span>
        </button>
      </div>
    </div>
  )
}

