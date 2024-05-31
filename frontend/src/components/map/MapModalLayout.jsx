const MapModalLayout = ({ children }) => {
  return (
    <>
      <dialog id="admin_map_modal_1" className="modal">
        {children}
      </dialog>
    </>
  );
};

export default MapModalLayout;
