module UsersHelper
  def label_and_text(form, field)
    form.label(field) +
    form.text_field(field, {class: field}) +
    tag(:br)
  end

  def label_and_password(form, field)
    form.label(field) +
    form.password_field(field) +
    tag(:br)
  end
end
