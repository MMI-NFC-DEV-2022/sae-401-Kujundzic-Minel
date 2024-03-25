export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      acteurs: {
        Row: {
          actor_bio: string | null
          actor_birthday: string | null
          actor_first_name: string | null
          actor_img: string | null
          actor_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          actor_bio?: string | null
          actor_birthday?: string | null
          actor_first_name?: string | null
          actor_img?: string | null
          actor_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          actor_bio?: string | null
          actor_birthday?: string | null
          actor_first_name?: string | null
          actor_img?: string | null
          actor_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      acteurs_films: {
        Row: {
          id: number
          id_acteur: number | null
          id_film: number | null
        }
        Insert: {
          id?: number
          id_acteur?: number | null
          id_film?: number | null
        }
        Update: {
          id?: number
          id_acteur?: number | null
          id_film?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_acteurs_films_id_acteur_fkey"
            columns: ["id_acteur"]
            isOneToOne: false
            referencedRelation: "acteurs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_acteurs_films_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
        ]
      }
      collection: {
        Row: {
          collection_img: string | null
          collection_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          collection_img?: string | null
          collection_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          collection_img?: string | null
          collection_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      collection_film: {
        Row: {
          created_at: string
          id: number
          id_collection: number | null
          id_film: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_collection?: number | null
          id_film?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_collection?: number | null
          id_film?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_collection_film_id_collection_fkey"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "collection"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_collection_film_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
        ]
      }
      films: {
        Row: {
          created_at: string
          film_cover: string | null
          film_duree: string | null
          film_favoris: boolean | null
          film_name: string | null
          film_sortie: string | null
          film_synopsis: string | null
          id: number
        }
        Insert: {
          created_at?: string
          film_cover?: string | null
          film_duree?: string | null
          film_favoris?: boolean | null
          film_name?: string | null
          film_sortie?: string | null
          film_synopsis?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          film_cover?: string | null
          film_duree?: string | null
          film_favoris?: boolean | null
          film_name?: string | null
          film_sortie?: string | null
          film_synopsis?: string | null
          id?: number
        }
        Relationships: []
      }
      physique: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          physique_img: string | null
          physique_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          physique_img?: string | null
          physique_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          physique_img?: string | null
          physique_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_physique_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
        ]
      }
      physique_film: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_physique: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_physique?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_physique?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_physique_film_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_physique_film_id_physique_fkey"
            columns: ["id_physique"]
            isOneToOne: false
            referencedRelation: "physique"
            referencedColumns: ["id"]
          },
        ]
      }
      realisateur_film: {
        Row: {
          id_film: number
          id_realisateur: number | null
        }
        Insert: {
          id_film: number
          id_realisateur?: number | null
        }
        Update: {
          id_film?: number
          id_realisateur?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_realisateur_film_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: true
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_realisateur_film_id_realisateur_fkey"
            columns: ["id_realisateur"]
            isOneToOne: false
            referencedRelation: "realisateurs"
            referencedColumns: ["id"]
          },
        ]
      }
      realisateurs: {
        Row: {
          created_at: string
          id: number
          realisateur_bio: string | null
          realisateur_birthday: string | null
          realisateur_first_name: string | null
          realisateur_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          realisateur_bio?: string | null
          realisateur_birthday?: string | null
          realisateur_first_name?: string | null
          realisateur_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          realisateur_bio?: string | null
          realisateur_birthday?: string | null
          realisateur_first_name?: string | null
          realisateur_name?: string | null
        }
        Relationships: []
      }
      support: {
        Row: {
          created_at: string
          id: number
          support_img: string | null
          support_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          support_img?: string | null
          support_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          support_img?: string | null
          support_name?: string | null
        }
        Relationships: []
      }
      support_film: {
        Row: {
          created_at: string
          id: number
          id_film: number | null
          id_support: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_support?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          id_film?: number | null
          id_support?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_support_film_id_film_fkey"
            columns: ["id_film"]
            isOneToOne: false
            referencedRelation: "films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_film_id_support_fkey"
            columns: ["id_support"]
            isOneToOne: false
            referencedRelation: "support"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
