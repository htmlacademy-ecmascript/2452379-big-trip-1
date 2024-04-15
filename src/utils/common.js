const onEscDo = (cb) => ((evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    cb(evt);
  }
});

export { onEscDo };
