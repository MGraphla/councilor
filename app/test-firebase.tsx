"use client";

import { useEffect, useState } from "react";
import { auth } from "@/firebase/client";

export default function TestFirebase() {
  const [envStatus, setEnvStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Log all environment variables
    console.log("All Environment Variables:", {
      NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    });

    // Set environment variable status
    setEnvStatus({
      apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: !!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: !!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: !!process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    });

    // Try to initialize Firebase manually to see the error
    try {
      const config = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      };
      console.log("Firebase Config Object:", config);
    } catch (error) {
      console.error("Firebase Initialization Error:", error);
    }
  }, []);

  return (
    <div className="p-4">
      <h1>Firebase Test</h1>
      <p>Check the browser console for Firebase configuration details.</p>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h2 className="font-bold">Environment Variables Status:</h2>
        <ul className="mt-2">
          <li>API Key: {envStatus.apiKey ? "✅ Set" : "❌ Missing"}</li>
          <li>Auth Domain: {envStatus.authDomain ? "✅ Set" : "❌ Missing"}</li>
          <li>Project ID: {envStatus.projectId ? "✅ Set" : "❌ Missing"}</li>
          <li>Storage Bucket: {envStatus.storageBucket ? "✅ Set" : "❌ Missing"}</li>
          <li>Messaging Sender ID: {envStatus.messagingSenderId ? "✅ Set" : "❌ Missing"}</li>
          <li>App ID: {envStatus.appId ? "✅ Set" : "❌ Missing"}</li>
        </ul>
      </div>
    </div>
  );
} 