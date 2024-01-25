"use client"
import axios from "axios"
import { useEffect, useState } from "react"

interface PriceResult {
  [key: string]: number;
}

interface PriceResponse {
  result: PriceResult;
  message: string;
  statusCode: number;
  error: boolean;
}

export const usePrice = () => {
  
  const [price, setPrice] = useState<PriceResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  
  const getPrice = async () => {
    setLoading(true)
    const { data } = await axios.get<PriceResponse>("https://us-central1-copter-655bc.cloudfunctions.net/api/cryptoPrice")
    setPrice(data)
    setLoading(false)
  }
  
  useEffect(() => {
    getPrice()
  }, [])
  
  return {
    price,
    loading
  }
}