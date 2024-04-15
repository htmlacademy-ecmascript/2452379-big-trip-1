const onEscDo = (cb) => ((evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    cb(evt);
  }
});

export { onEscDo };
