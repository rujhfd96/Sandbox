import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ReportPage.css";

export default function EnrollmentPage() {
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    responsavelNome: "",
    responsavelTelefone: "",
    alunoNome: "",
    alunoNascimento: "",
    comoConheceu: "Indicação",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.responsavelNome.trim() || !form.responsavelTelefone.trim()) {
      alert("Por favor, preencha os campos obrigatórios.");
      return;
    }

    setSending(true);

    const message_html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color:#1e293b;">
        <h2 style="margin:0 0 12px 0;color:#0a4fbf;">Pré-cadastro de Matrícula</h2>

        <table cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:720px;border-collapse:collapse;background:#f5f5f5;border-radius:8px;overflow:hidden">
          <tbody>
            ${row("Nome do responsável", form.responsavelNome)}
            ${row("Telefone/WhatsApp", form.responsavelTelefone)}
            ${form.alunoNome ? row("Nome da criança", form.alunoNome) : ""}
            ${form.alunoNascimento ? row("Data de nascimento", form.alunoNascimento) : ""}
            ${form.comoConheceu ? row("Como conheceu a escola", form.comoConheceu) : ""}
          </tbody>
        </table>

        <h3 style="margin:24px 0 8px 0;color:#0a4fbf;">Mensagem</h3>
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
          assunto: `Pré-cadastro de Matrícula — ${form.alunoNome || "Aluno(a)"}`,
          message_html,
          reply_to: form.responsavelTelefone,
        },
        { publicKey: "9-jhRNgYsLBMmOAfv" }
      );
      alert("Formulário enviado com sucesso! ✅ Em breve entraremos em contato.");
      setForm({
        responsavelNome: "",
        responsavelTelefone: "",
        alunoNome: "",
        alunoNascimento: "",
        comoConheceu: "Indicação",
        mensagem: "",
      });
    } catch (err) {
      console.error(err);
      alert("Não foi possível enviar. Verifique as chaves/ids do EmailJS.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="report-page">
      <section className="report-card">
        <h1>Pré-cadastro de Matrícula</h1>
        <p className="muted">
          Preencha os dados abaixo. Entraremos em contato para concluir o processo de matrícula.
        </p>

        <form className="report-form" onSubmit={handleSubmit}>
          <div className="grid-2">
            <div className="field">
              <label>Nome do responsável *</label>
              <input
                type="text"
                name="responsavelNome"
                value={form.responsavelNome}
                onChange={handleChange}
                required
                placeholder="Ex.: Maria Silva"
              />
            </div>
            <div className="field">
              <label>Telefone/WhatsApp *</label>
              <input
                type="tel"
                name="responsavelTelefone"
                value={form.responsavelTelefone}
                onChange={handleChange}
                required
                placeholder="(85) 9 9999-9999"
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="field">
              <label>Nome da criança</label>
              <input
                type="text"
                name="alunoNome"
                value={form.alunoNome}
                onChange={handleChange}
                placeholder="Ex.: João Pedro"
              />
            </div>
            <div className="field">
              <label>Data de nascimento</label>
              <input
                type="date"
                name="alunoNascimento"
                value={form.alunoNascimento}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Como conheceu a escola?</label>
            <select
              name="comoConheceu"
              value={form.comoConheceu}
              onChange={handleChange}
            >
              <option>Indicação</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>Google</option>
              <option>Passando em frente</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="field">
            <label>Mensagem (opcional)</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              rows={4}
              placeholder="Conte algo que considere importante..."
            />
          </div>

          <div className="actions">
            <button type="submit" disabled={sending}>
              {sending ? "Enviando..." : "Enviar interesse de matrícula"}
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
