
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Check for mobile on first render
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth < MOBILE_BREAKPOINT || 
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    }
    
    // Initial check
    checkMobile();
    
    // Create a media query for better responsiveness
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Event handler for resize and media query change
    const onChange = () => checkMobile();
    
    // Listen for changes to update state
    mql.addEventListener("change", onChange);
    window.addEventListener("resize", onChange);
    
    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", onChange);
    }
  }, [])

  return isMobile ?? false; // Default to desktop if undefined (during SSR)
}

// Type check for navigator.connection which is not in standard TS types
declare global {
  interface Navigator {
    connection?: {
      downlink: number;
      effectiveType: string;
      rtt: number;
      saveData: boolean;
    }
  }
}
