import { HttpClient } from '@injectivelabs/utils'


export const fetchPassword = async (username:string): Promise<string> => {
  try {
    const response = (await new HttpClient(
      'https://kvdb.io/EiifMMDa8ZBdGLkvuuT3vy/'
    ).get(username))  as {
      data: string
    }

    console.log("response", response)
    if (!response ) {
      return "Failed to Authenticate"
    }    
    return response.data

  } catch (e) {
    return "Failed to Authenticate"
  }
}
