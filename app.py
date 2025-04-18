import streamlit as st

st.title("Test PWA")

st.write("Ceci est une application de test PWA simple.")
st.write("Ajoutez-la à votre écran d'accueil pour une expérience hors ligne !")

if "count" not in st.session_state:
    st.session_state["count"] = 0

def increment_counter():
    st.session_state["count"] += 1

st.button("Incrementer le compteur", on_click=increment_counter)

st.write(f"Le compteur est à : {st.session_state['count']}")
