import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ReportPage.css";
import { useLanguage } from "../../context/LanguageContext";

const TEXTS = {
  pt: {
    pageTitle: "Pré-cadastro de Matrícula",
    pageSubtitle:
      "Preencha os dados abaixo. Entraremos em contato para concluir o processo de matrícula.",
    requiredAlert: "Por favor, preencha os campos obrigatórios.",
    successAlert:
      "Formulário enviado com sucesso! ✅ Em breve entraremos em contato.",
    errorAlert:
      "Não foi possível enviar. Verifique as chaves/ids do EmailJS.",
    form: {
      guardianNameLabel: "Nome do responsável *",
      guardianNamePlaceholder: "Ex.: Maria Silva",
      phoneLabel: "Telefone/WhatsApp *",
      phonePlaceholder: "(85) 9 9999-9999",
      childNameLabel: "Nome da criança",
      childNamePlaceholder: "Ex.: João Pedro",
      birthDateLabel: "Data de nascimento",
      howKnowLabel: "Como conheceu a escola?",
      howKnowOptions: [
        "Indicação",
        "Instagram",
        "Facebook",
        "Google",
        "Passando em frente",
        "Outro",
      ],
      messageLabel: "Mensagem (opcional)",
      messagePlaceholder: "Conte algo que considere importante...",
      submitSending: "Enviando...",
      submitDefault: "Enviar interesse de matrícula",
    },
    email: {
      title: "Pré-cadastro de Matrícula",
      subjectPrefix: "Pré-cadastro de Matrícula — ",
      messageTitle: "Mensagem",
      defaultChild: "Aluno(a)",
      rowGuardianName: "Nome do responsável",
      rowPhone: "Telefone/WhatsApp",
      rowChildName: "Nome da criança",
      rowBirthDate: "Data de nascimento",
      rowHowKnow: "Como conheceu a escola",
    },
  },
  en: {
    pageTitle: "Pre-enrollment Form",
    pageSubtitle:
      "Fill in the information below. We will contact you to complete the enrollment process.",
    requiredAlert: "Please fill in the required fields.",
    successAlert:
      "Form submitted successfully! ✅ We will contact you soon.",
    errorAlert:
      "The form could not be sent. Please check your EmailJS service/template IDs.",
    form: {
      guardianNameLabel: "Guardian's name *",
      guardianNamePlaceholder: "e.g.: Maria Silva",
      phoneLabel: "Phone/WhatsApp *",
      phonePlaceholder: "+55 (85) 9 9999-9999",
      childNameLabel: "Child's name",
      childNamePlaceholder: "e.g.: John Peter",
      birthDateLabel: "Date of birth",
      howKnowLabel: "How did you hear about the school?",
      howKnowOptions: [
        "Referral",
        "Instagram",
        "Facebook",
        "Google",
        "Saw the school in person",
        "Other",
      ],
      messageLabel: "Message (optional)",
      messagePlaceholder: "Share anything you consider important...",
      submitSending: "Sending...",
      submitDefault: "Send enrollment interest",
    },
    email: {
      title: "Pre-enrollment Form",
      subjectPrefix: "Pre-enrollment — ",
      messageTitle: "Message",
      defaultChild: "Student",
      rowGuardianName: "Guardian's name",
      rowPhone: "Phone/WhatsApp",
      rowChildName: "Child's name",
      rowBirthDate: "Date of birth",
      rowHowKnow: "How did you hear about the school",
    },
  },
};

export default function EnrollmentPage() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];

  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    responsavelNome: "",
    responsavelTelefone: "",
    alunoNome: "",
    alunoNascimento: "",
    comoConheceu: lang === "pt" ? "Indicação" : "Referral",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.responsavelNome.trim() || !form.responsavelTelefone.trim()) {
      alert(t.requiredAlert);
      return;
    }

    setSending(true);

    const eText = t.email;

    const message_html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#1e293b;">
        <h2 style="margin:0 0 12px 0;color:#0a4fbf;">${escapeHtml(
          eText.title
        )}</h2>

        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;border-collapse:collapse;background:#f5f5f5;border-radius:8px;overflow:hidden">
          <tbody>
            ${row(eText.rowGuardianName, form.responsavelNome)}
            ${row(eText.rowPhone, form.responsavelTelefone)}
            ${
              form.alunoNome
                ? row(eText.rowChildName, form.alunoNome)
                : ""
            }
            ${
              form.alunoNascimento
                ? row(eText.rowBirthDate, form.alunoNascimento)
                : ""
            }
            ${
              form.comoConheceu
                ? row(eText.rowHowKnow, form.comoConheceu)
                : ""
            }
          </tbody>
        </table>

        <h3 style="margin:24px 0 8px 0;color:#0a4fbf;">${escapeHtml(
          eText.messageTitle
        )}</h3>
        <pre style="white-space:pre-wrap;background:#0b1b34;color:#e5e7eb;padding:14px;border-radius:8px;line-height:1.5;font-size:14px;">
${escapeHtml(form.mensagem || "—")}
        </pre>
      </div>
    `;

    try {
      await emailjs.send(
        "service_smvksti",
        "template_3x2jexm",
        {
          assunto: `${eText.subjectPrefix}${
            form.alunoNome || eText.defaultChild
          }`,
          message_html,
          reply_to: form.responsavelTelefone,
        },
        { publicKey: "9-jhRNgYsLBMmOAfv" }
      );
      alert(t.successAlert);
      setForm({
        responsavelNome: "",
        responsavelTelefone: "",
        alunoNome: "",
        alunoNascimento: "",
        comoConheceu: lang === "pt" ? "Indicação" : "Referral",
        mensagem: "",
      });
    } catch (err) {
      console.error(err);
      alert(t.errorAlert);
    } finally {
      setSending(false);
    }
  };

  const f = t.form;

  return (
    <main className="report-page">
      <section className="report-card">
        <h1>{t.pageTitle}</h1>
        <p className="muted">{t.pageSubtitle}</p>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="field">
              <label>{f.guardianNameLabel}</label>
              <input
                type="text"
                name="responsavelNome"
                value={form.responsavelNome}
                onChange={handleChange}
                required
                placeholder={f.guardianNamePlaceholder}
              />
            </div>
            <div className="field">
              <label>{f.phoneLabel}</label>
              <input
                type="tel"
                name="responsavelTelefone"
                value={form.responsavelTelefone}
                onChange={handleChange}
                required
                placeholder={f.phonePlaceholder}
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>{f.childNameLabel}</label>
              <input
                type="text"
                name="alunoNome"
                value={form.alunoNome}
                onChange={handleChange}
                placeholder={f.childNamePlaceholder}
              />
            </div>
            <div className="field">
              <label>{f.birthDateLabel}</label>
              <input
                type="date"
                name="alunoNascimento"
                value={form.alunoNascimento}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>{f.howKnowLabel}</label>
            <select
              name="comoConheceu"
              value={form.comoConheceu}
              onChange={handleChange}
            >
              {f.howKnowOptions.map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>{f.messageLabel}</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder={f.messagePlaceholder}
            />
          </div>

          <div className="actions">
            <button type="submit" disabled={sending}>
              {sending ? f.submitSending : f.submitDefault}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

function row(label, value) {
  return `
    <tr>
      <td style="padding:10px 14px;background:#e9eef7;color:#0a4fbf;font-weight:700;width:240px;">${escapeHtml(
        label
      )}</td>
      <td style="padding:10px 14px;background:#f8fafc;color:#334155;">${escapeHtml(
        value || "—"
      )}</td>
    </tr>
  `;
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
