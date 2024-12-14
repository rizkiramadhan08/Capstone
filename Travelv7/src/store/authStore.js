import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      token: null, // Menyimpan data autentikasi (token dan user)
      user: null,

      // Fungsi untuk menyimpan data autentikasi
      setAuth: (authData) =>
        set({
          token: authData.token,
          user: {
            id: authData.id,
            username: authData.username,
            email: authData.email,
            firstName: authData.first_name,
            lastName: authData.last_name,
            city: authData.city,
            role: authData.role,
          },
        }),

      // Fungsi untuk logout
      clearAuth: () => set({ auth: null }),
    }),
    {
      name: "auth-store", // Key untuk localStorage
      partialize: (state) => ({
        token: state.token,
        user: state.user, // Hanya menyimpan data autentikasi
      }),
    }
  )
);

export default useAuthStore;
