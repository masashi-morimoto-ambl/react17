export type GetItemSchema = {
  body: string
  coediting: boolean
  created_at: string
  group: unknown
  id: string
  likes_count: number
  page_views_count: number | null
  private: boolean
  reactions_count: number
  rendered_body: string
  stocks_count: number
  tags: {
    name: string
    versions: number[]
  }
  team_membership: unknown | null
  title: string
  updated_at: string
  url: string
  user: UserInformation
}

export type GetItems = {
  data: GetItemSchema[],
  totalCount: string
}

type UserInformation = {
  description: string
  facebook_id: string
  followees_count: number
  followers_count: number
  github_login_name: string | null
  id: string
  items_count: number
  linkedin_id: string
  location: string
  name: string
  organization: string
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: string
  website_url: string
}